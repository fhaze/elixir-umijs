defmodule Umi.Repo do
  use Ecto.Repo,
    otp_app: :api,
    adapter: Ecto.Adapters.MySQL
end
