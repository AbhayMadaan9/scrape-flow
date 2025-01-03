"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

export function AppProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
  <NextThemesProvider 
  attribute="class" 
  defaultTheme="system" 
  enableSystem
  disableTransitionOnChange
  {...props}>{children}</NextThemesProvider>
  <ReactQueryDevtools />
  </QueryClientProvider>
}
