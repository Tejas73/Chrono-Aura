import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { Provider } from "next-auth/providers/index"

interface EnvironmentVariables {
  GOOGLE_ID: string
  GOOGLE_SECRET: string
  GITHUB_ID: string
  GITHUB_SECRET: string
  NEXTAUTH_URL: string
  NEXTAUTH_SECRET: string
}

declare const process: {
  env: EnvironmentVariables
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ] as Provider[],

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)