# Build stage
FROM openjdk:21-jdk-slim AS build

WORKDIR /portfolio

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*


# 프로젝트 파일 복사
COPY .env .
COPY .gitattributes .
COPY .gitignore .
COPY build.gradle.kts .
COPY gradle.properties .
COPY gradlew .
COPY gradlew.bat .
COPY settings.gradle.kts .
COPY gradle gradle
COPY src src

# gradlew 실행 권한 부여
RUN chmod +x ./gradlew

# JOOQ 코드 생성 및 빌드
RUN ./gradlew generatePortfolioJooq


# 빌드 실행
RUN ./gradlew  bootJar --stacktrace --debug

# Run stage
FROM openjdk:21-slim
WORKDIR /portfolio

# 빌드 단계에서 생성된 JAR 파일 복사
COPY --from=build /portfolio/build/libs/*.jar app.jar

# 80 포트 노출
EXPOSE 80

# JAR 파일 실행
ENTRYPOINT ["java", "-jar", "app.jar"]