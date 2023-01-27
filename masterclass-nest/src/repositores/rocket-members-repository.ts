/* eslint-disable prettier/prettier */
export abstract class RocketMembersRepository {
    abstract create(name: string, memberFunction: string): Promise<void>;
}