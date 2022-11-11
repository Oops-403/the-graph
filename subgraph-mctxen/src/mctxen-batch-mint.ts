import { BigInt } from "@graphprotocol/graph-ts"
import { RankClaimed } from "../generated/MCTXENBatchMint/MCTXENBatchMint"
import { RankClaimedEntity } from "../generated/schema"

export function handleRankClaimed(event: RankClaimed): void {
  // let contract = Contract.bind(event.address)
  // let entity = RankClaimedEntity.load(event.transaction.from.toHex())

  // if (!entity) {
  //   entity = new RankClaimedEntity(event.transaction.from.toHex())
  // }

  let  entity = new RankClaimedEntity(event.transaction.hash.toHex())

  entity.transaction_hash = event.transaction.hash
  entity.user_address = event.transaction.from
  entity.contract_address = event.transaction.to

  if (event.receipt) {
    // entity.transaction_fee =  event.receipt?.gasUsed.toString()
  }

//   entity.mint_address = event.receipt?.logs
//   entity.mint_rank = event.params.rank
//   entity.mint_term = event.params.term

  entity.save()
}