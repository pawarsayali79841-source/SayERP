package com.sayerp.app

// Android/native concept: student portal entry screen (Kotlin)
class MainActivity {
    fun welcome(name: String) = "Welcome to SayERP, $name!"
}
fun main() = println(MainActivity().welcome("Sayali Pawar"))
