plugins {
    kotlin("jvm") version "1.9.25"
    kotlin("plugin.spring") version "1.9.25"
    id("org.springframework.boot") version "3.4.0"
    id("io.spring.dependency-management") version "1.1.6"
    kotlin("plugin.jpa") version "1.9.25"
    kotlin("plugin.allopen") version "1.9.25"
    id("nu.studer.jooq") version "9.0"
}

group = "com.portfolio"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jdbc")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-jdbc")
    implementation("org.springframework.boot:spring-boot-starter-jooq")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("io.jsonwebtoken:jjwt:0.9.1")
    implementation("javax.xml.bind:jaxb-api:2.4.0-b180830.0359")
    implementation("org.flywaydb:flyway-core")
    implementation("org.flywaydb:flyway-mysql")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.mariadb.jdbc:mariadb-java-client:3.4.1")
    implementation("org.jooq:jooq:3.18.0")

    implementation("io.github.microutils:kotlin-logging-jvm:3.0.5")
    implementation("org.springframework.boot:spring-boot-starter-logging")

    implementation("mysql:mysql-connector-java:8.0.28")
    implementation("com.zaxxer:HikariCP")

    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0")
    implementation("org.springdoc:springdoc-openapi-starter-common:2.3.0")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    implementation("org.apache.poi:poi:5.2.5")
    implementation("org.apache.poi:poi-ooxml:5.2.5")
    implementation("org.apache.xmlbeans:xmlbeans:5.1.1")

    implementation("com.github.ulisesbocchio:jasypt-spring-boot-starter:3.0.4")

    jooqGenerator("org.jooq:jooq-meta:3.18.0")
    jooqGenerator("org.mariadb.jdbc:mariadb-java-client:3.1.4")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testImplementation("org.springframework.security:spring-security-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}


sourceSets {
    main {
        java {
            srcDirs(
            )
        }
    }
}

jooq {
    version.set("3.18.0")
    edition.set(nu.studer.gradle.jooq.JooqEdition.OSS)

    configurations {
        create("portfolio") {
            generateSchemaSourceOnCompilation.set(true)

            jooqConfiguration.apply {

                jdbc.apply {
                    driver = "org.mariadb.jdbc.Driver"
                    url = "jdbc:mariadb://localhost:3306/portfolio"
                    user = "root"
                    password = "123123"
                    properties.add(org.jooq.meta.jaxb.Property().apply {
                        key = "serverTimezone"
                        value = "UTC"
                    })
                }

                generator.apply {
                    name = "org.jooq.codegen.KotlinGenerator"
                    database.apply {
                        // MariaDB는 MySQL과 호환되므로 MySQL 데이터베이스 설정 사용
                        name = "org.jooq.meta.mysql.MySQLDatabase"
                        includes = ".*"
                        excludes = "flyway_schema_history|temp_.*"
                        inputSchema = "base"
                    }

                    generate.apply {
                        isDeprecated = false
                        isRecords = true
                        isImmutablePojos = true
                        isFluentSetters = true
                        isPojosAsKotlinDataClasses = true
                    }

                    target.apply {
                        packageName = "com.portfolio.kim"
                        directory = "build/generated-src/jooq/"
                    }

                    strategy.name = "org.jooq.codegen.DefaultGeneratorStrategy"
                }
            }
        }

    }
}


tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        jvmTarget = "17"
        freeCompilerArgs = listOf("-Xmx2048m")
    }
}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

allOpen {
    annotation("jakarta.persistence.Entity")
    annotation("jakarta.persistence.MappedSuperclass")
    annotation("jakarta.persistence.Embeddable")
}

tasks.withType<Test> {
    useJUnitPlatform()
}
