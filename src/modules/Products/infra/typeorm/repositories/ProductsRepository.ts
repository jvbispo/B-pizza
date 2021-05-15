/* eslint-disable camelcase */
import { Repository, getRepository } from 'typeorm';
import ICreateProductDTO from '@modules/Products/dtos/ICreateProduct';
import Product from '../entities/Product';
import IProductRepository from '../../../repositories/IProductRepository';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAllProducts(): Promise<Product[]> {
    return this.ormRepository.find();
  }

  public async findOne(id: string): Promise<Product | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async create({
    name,
    price,
    quantity,
    picture,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      price,
      quantity,
      picture,
    });
    await this.save(product);
    return product;
  }

  public async update(product: Product): Promise<Product> {
    const productFound = this.ormRepository.findOne({ id: product.id });
    if (productFound) {
      await this.save(product);
    }
    return product;
  }

  public async save(user: Product): Promise<void> {
    await this.ormRepository.save(user);
  }
}

export default ProductRepository;
