# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :api,
  namespace: Umi,
  ecto_repos: [Umi.Repo]

# Configures the endpoint
config :api, UmiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "86ifcCHQ9xO95xpV98Pxp9v+7N4tHDGrA89gbFzSOoqe4hmn5ShZzNPW868Ggwwp",
  render_errors: [view: UmiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Umi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
