import { BigInt, ethereum } from "@graphprotocol/graph-ts"
import {
  XENCrypto,
  Approval,
  MintClaimed,
  RankClaimed,
  Staked,
  Transfer,
  Withdrawn
} from "../generated/XENCrypto/XENCrypto"
import { RankClaimedEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleMintClaimed(event: MintClaimed): void {}

export function handleRankClaimed(event: RankClaimed): void {
  // let contract = Contract.bind(event.address)
  // let contract = XENCrypto.bind(event.address)
  // let entity = RankClaimedEntity.load(event.transaction.from.toHex())

  // if (!entity) {
  //   entity = new RankClaimedEntity(event.transaction.from.toHex())
  // }
  let entity = new RankClaimedEntity(event.transaction.from.toHex())

  entity.logIndex = event.logIndex
  entity.transactionLogIndex = event.transactionLogIndex

  entity.transaction_hash = event.transaction.hash
  entity.user_address = event.transaction.from
  entity.contract_address = event.transaction.to

  // if (event.receipt) {
    // entity.transaction_fee =  BigInt.fromU32(event.)
    // if (event.receipt.logs) {
    //   for (let i = 0; i < event.receipt.logs.length; i++) {
    //   }
    // }
  // }

  entity.mint_address = event.params.user

  entity.mint_rank = event.params.rank
  entity.mint_term = event.params.term

  entity.save()
}

export function handleStaked(event: Staked): void {}

export function handleTransfer(event: Transfer): void {}

export function handleWithdrawn(event: Withdrawn): void {}
