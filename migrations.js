import 'dotenv/config'
import { db } from '#utils/db.js';

await db.execute("CREATE TABLE IF NOT EXISTS todos (ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, completed INTEGER)")