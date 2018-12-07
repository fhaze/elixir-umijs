defmodule Umi.ProductContext.Product do
  use Ecto.Schema
  import Ecto.Changeset


  schema "products" do
    field :name, :string
    field :value, :decimal

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :value])
    |> validate_required([:name, :value])
  end
end
