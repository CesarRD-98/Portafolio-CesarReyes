export type ApiSuccess<T> = {
    success: true
    data?: T
}

export type ApiError = {
    success: false
    error: {
        message: string
        status: number
    }
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError