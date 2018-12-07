use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :api, UmiWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :api, Umi.Repo,
  username: "root",
  password: "",
  database: "api_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
