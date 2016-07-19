json.companies @companies do |company|
  json.name company.name

  json.products company.products do |product|
    json.name product.name
  end
end
