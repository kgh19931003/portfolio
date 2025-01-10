package com.portfolio.kim.proto



fun String?.removeBearerPrefix(): String? {
    return when {
        this == null -> null
        this.startsWith("Bearer ", ignoreCase = true) -> this.substring(7).trim()
        else -> this.trim()
    }
}