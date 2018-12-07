defmodule UmiWeb.Router do
  use UmiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", UmiWeb do
    pipe_through :api

    resources "/products", ProductController, except: [:new, :edit]
  end
end
