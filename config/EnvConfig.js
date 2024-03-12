import dotenv from "dotenv";

dotenv.config()

const EnvConfig = {
    PORT : process.env.PORT || 3000,
    DB_URL:process.env.DB_URL || ''
}

export default EnvConfig