import * as Sentry from "@sentry/browser"

const isLocal = process.env.NODE_ENV === "development"

export function initSentry() {
  if (isLocal) return

  Sentry.init({
    dsn:
      "https://009fb24c25214e758c391cd19d2683ca@o386349.ingest.sentry.io/5220503",
  })
}

export function logError(error, errorInfo = null) {
  if (isLocal) return

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo)
    Sentry.captureException(error)
  })
}

export function onError(error) {
  let errorInfo = {}
  let message = error.toString()

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error
    message = error.message
    error = new Error(message)
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url
  }

  logError(error, errorInfo)

  alert(message)
}
