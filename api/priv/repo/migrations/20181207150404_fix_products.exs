defmodule Umi.Repo.Migrations.FixProducts do
  use Ecto.Migration

  def change do
    alter table(:products) do
      modify :value, :decimal, precision: 10, scale: 2
    end
  end
end
