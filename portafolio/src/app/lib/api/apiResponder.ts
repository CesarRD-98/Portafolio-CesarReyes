import { NextResponse } from "next/server"
import { HTTP_STATUS, HttpStatus } from "./httpStatus"
import { ApiResponse } from "@/app/types/api.type"

export class ApiResponder {
  static ok<T>(data?: T) {
    return NextResponse.json<ApiResponse<T>>(
      {
        success: true,
        data,
      },
      { status: HTTP_STATUS.OK }
    )
  }

  static created<T>(data?: T) {
    return NextResponse.json<ApiResponse<T>>(
      {
        success: true,
        data,
      },
      { status: HTTP_STATUS.CREATED }
    )
  }

  static noContent() {
    return new NextResponse(null, {
      status: HTTP_STATUS.NO_CONTENT,
    })
  }

  static error(message: string, status: HttpStatus) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: {
          message,
          status,
        },
      },
      { status }
    )
  }

  static badRequest(message = "Bad request") {
    return this.error(message, HTTP_STATUS.BAD_REQUEST)
  }

  static unauthorized(message = "Unauthorized") {
    return this.error(message, HTTP_STATUS.UNAUTHORIZED)
  }

  static forbidden(message = "Forbidden") {
    return this.error(message, HTTP_STATUS.FORBIDDEN)
  }

  static notFound(message = "Not found") {
    return this.error(message, HTTP_STATUS.NOT_FOUND)
  }

  static serverError(message = "Internal server error") {
    return this.error(message, HTTP_STATUS.INTERNAL_SERVER_ERROR)
  }
}