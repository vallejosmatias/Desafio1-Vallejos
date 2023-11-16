class ProductManager {
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('Todos los campos son obligatorios');
      return;
    }

    // Validar que no se repita el campo "code"
    const codeExists = this.products.some(product => product.code === code);
    if (codeExists) {
      console.error('El código ya existe. No se pueden repetir códigos.');
      return;
    }

    // Incrementar el id autoincrementable
    this.lastId++;

    // Crear el producto con un id autoincrementable
    const product = {
      id: this.lastId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Agregar el producto al arreglo de productos
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find(product => product.id === productId);

    if (product) {
      return product;
    } else {
      console.error('Not found');
      return null;
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

// Agregar productos
productManager.addProduct('Dragon', 'Impreso en 3d', 9000, 'imagen1.jpg', 'ABC123', 50);
productManager.addProduct('Oso', 'articulado 3d', 3500, 'imagen2.jpg', 'DEF456', 30);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtener un producto por ID
const productById = productManager.getProductById(1);
console.log('Producto con ID 1:', productById);

// Intentar agregar un producto con el mismo código (debería mostrar un error)
productManager.addProduct('Figura personalizada', 'Impreso en resina', 6.000, 'imagen3.jpg', 'ABC123', 20);
