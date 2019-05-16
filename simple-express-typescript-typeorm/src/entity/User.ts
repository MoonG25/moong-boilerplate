import { IsEmail } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: 'user_mast' })
class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  id: number;

  @Column({ type: 'varchar', name: 'id_classification' })
  idClassification: string;

  @Column({ type: 'varchar', name: 'email_addr' })
  @IsEmail()
  emailAddr: string;

  @Column({ type: 'varchar', name: 'nickname' })
  nickname: string;

  @Column({ type: 'varchar', name: 'application_type' })
  applicationType: string;

  @Column({ type: 'datetime', name: 'application_date' })
  applicationDate: string;

  @Column({ type: 'datetime', name: 'activate_date' })
  activateDate: string;

  @Column({ type: 'datetime', name: 'resign_date' })
  resignDate: string;

  @Column({ type: 'varchar', name: 'self_rcmnd_code' })
  selfRcmndCode: string;

  @Column({ type: 'varchar', name: 'reco_rcmnd_code' })
  recoRcmndCode: string;

  @UpdateDateColumn({ type: 'datetime', name: 'sys_process_dttm' })
  sysProcessDttm: string;

  // relation
}

export default User;