import { HttpService, Injectable, Request } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

import { map } from 'rxjs/operators';

@Injectable()
export class OrganizationsService {
  constructor(private httpService: HttpService) {}
  private readonly request: Request;

  create(createOrganizationDto: CreateOrganizationDto) {
    return 'This action adds a new organization';
  }

  // findAll(request: Request) {
  //   const headers = request.headers;

  //   console.log(headers);

  //   return this.httpService
  //     .get('https://api.staging.base.cropwise.com/v2/orgs', {
  //       headers,
  //     })
  //     .pipe(map((response) => response.data));
  // }

  // Below is implementation using env variable

  findAll(request: Request) {
    const bearerToken = process.env.BEARER_TOKEN;

    return this.httpService
      .get('https://api.staging.base.cropwise.com/v2/orgs', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .pipe(map((response) => response.data));
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
