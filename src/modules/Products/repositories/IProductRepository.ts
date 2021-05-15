import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProduct';

export default interface IProductRepository {
  findOne(id: string): Promise<Product | undefined>;
  findAllProducts(): Promise<Product[]>;
  create(data: ICreateProductDTO): Promise<Product>;
  update(product: Product): Promise<Product>;
  save(user: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
