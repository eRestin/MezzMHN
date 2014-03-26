
DEBUG = True

# Make these unique, and don't share it with anybody.
SECRET_KEY = "19322a7a-0177-42e2-bec4-22e0a5562081c11f421d-b346-44e2-b10e-c7a4202c90c74ebb4e0b-9b81-4266-8ae5-4e24ad037940"
NEVERCACHE_KEY = "f2859d5d-cc15-417e-aaf7-a3d4fb6177a3bb0e6fbb-c931-4d8f-82ca-3111ad824540f71d7e22-0322-4d22-b1f3-428f3c89646b"

DATABASES = {
    "default": {
        # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
        "ENGINE": "django.db.backends.sqlite3",
        # DB name or path to database file if using sqlite3.
        "NAME": "dev.db",
        # Not used with sqlite3.
        "USER": "",
        # Not used with sqlite3.
        "PASSWORD": "",
        # Set to empty string for localhost. Not used with sqlite3.
        "HOST": "",
        # Set to empty string for default. Not used with sqlite3.
        "PORT": "",
    }
}
