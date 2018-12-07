defmodule Umi.ProductContextTest do
  use Umi.DataCase

  alias Umi.ProductContext

  describe "products" do
    alias Umi.ProductContext.Product

    @valid_attrs %{name: "some name", value: "120.5"}
    @update_attrs %{name: "some updated name", value: "456.7"}
    @invalid_attrs %{name: nil, value: nil}

    def product_fixture(attrs \\ %{}) do
      {:ok, product} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ProductContext.create_product()

      product
    end

    test "list_products/0 returns all products" do
      product = product_fixture()
      assert ProductContext.list_products() == [product]
    end

    test "get_product!/1 returns the product with given id" do
      product = product_fixture()
      assert ProductContext.get_product!(product.id) == product
    end

    test "create_product/1 with valid data creates a product" do
      assert {:ok, %Product{} = product} = ProductContext.create_product(@valid_attrs)
      assert product.name == "some name"
      assert product.value == Decimal.new("120.5")
    end

    test "create_product/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ProductContext.create_product(@invalid_attrs)
    end

    test "update_product/2 with valid data updates the product" do
      product = product_fixture()
      assert {:ok, %Product{} = product} = ProductContext.update_product(product, @update_attrs)
      assert product.name == "some updated name"
      assert product.value == Decimal.new("456.7")
    end

    test "update_product/2 with invalid data returns error changeset" do
      product = product_fixture()
      assert {:error, %Ecto.Changeset{}} = ProductContext.update_product(product, @invalid_attrs)
      assert product == ProductContext.get_product!(product.id)
    end

    test "delete_product/1 deletes the product" do
      product = product_fixture()
      assert {:ok, %Product{}} = ProductContext.delete_product(product)
      assert_raise Ecto.NoResultsError, fn -> ProductContext.get_product!(product.id) end
    end

    test "change_product/1 returns a product changeset" do
      product = product_fixture()
      assert %Ecto.Changeset{} = ProductContext.change_product(product)
    end
  end
end
