import { Controller, Get, Inject } from '@nestjs/common';
import { CccModuleOptions, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './ccc.module-definition';

@Controller('ccc')
export class CccController {

  @Inject(MODULE_OPTIONS_TOKEN)
  private options: typeof OPTIONS_TYPE;

  @Get()
  hello() {
    console.info('🚀 ~ log:this.options.isGlobal ----->', this.options.isGlobal);
    return this.options;
  }

}
