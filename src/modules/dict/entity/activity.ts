import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * dict模块-研学活动管理
 */
@Entity('dict_study_activity')
export class DictStudyActivityEntity extends BaseEntity {
  @Index()
  @Column({ comment: '活动ID' })
  activityId: string;

  @Column({ comment: '研学活动的名称' })
  name: string;

  @Column({ comment: '活动的简要描述', nullable: true })
  description: string;

  @Column({ comment: '活动地点' })
  location: string;

  @Column({ comment: '活动开始的日期和时间', type: 'datetime' })
  startTime: Date;

  @Column({ comment: '活动结束的日期和时间', type: 'datetime' })
  endTime: Date;

  @Column({ comment: '最大参与人数' })
  maxParticipants: number;

  @Column({ comment: '已报名人数' })
  currentParticipants: number;

  @Column({ comment: '活动状态', default: 0, type: 'tinyint' })
  status: number;
}
