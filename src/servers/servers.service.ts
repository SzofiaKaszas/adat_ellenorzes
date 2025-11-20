import { Injectable } from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServersService {
  constructor(private readonly db: PrismaService){}

  create(createServerDto: CreateServerDto) {
    return this.db.server.create({
      data: createServerDto,
    })
  }

  findAll() {
    return this.db.server.findMany();
  }

  findOne(id: number) {
    return this.db.server.findUnique({
      where: {id}
    });
  }

  update(id: number, updateServerDto: UpdateServerDto) {
    return this.db.server.update({
      where : {id},
      data: updateServerDto
    });
  }

  remove(id: number) {
    return this.db.server.delete({
      where: {id}
    });
  }
}
