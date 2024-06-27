import { CoolController, BaseController } from '@cool-midway/core';
import { ThemeBaseInfoEntity } from '../../entity/info';

/**
 * 基地-信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ThemeBaseInfoEntity
})
export class AdminThemeBaseInfosController extends BaseController {}
