// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RankClaimedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RankClaimedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RankClaimedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RankClaimedEntity", id.toString(), this);
    }
  }

  static load(id: string): RankClaimedEntity | null {
    return changetype<RankClaimedEntity | null>(
      store.get("RankClaimedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (!value) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get transactionLogIndex(): BigInt | null {
    let value = this.get("transactionLogIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set transactionLogIndex(value: BigInt | null) {
    if (!value) {
      this.unset("transactionLogIndex");
    } else {
      this.set("transactionLogIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get transaction_hash(): Bytes | null {
    let value = this.get("transaction_hash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transaction_hash(value: Bytes | null) {
    if (!value) {
      this.unset("transaction_hash");
    } else {
      this.set("transaction_hash", Value.fromBytes(<Bytes>value));
    }
  }

  get user_address(): Bytes | null {
    let value = this.get("user_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set user_address(value: Bytes | null) {
    if (!value) {
      this.unset("user_address");
    } else {
      this.set("user_address", Value.fromBytes(<Bytes>value));
    }
  }

  get contract_address(): Bytes | null {
    let value = this.get("contract_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set contract_address(value: Bytes | null) {
    if (!value) {
      this.unset("contract_address");
    } else {
      this.set("contract_address", Value.fromBytes(<Bytes>value));
    }
  }

  get mint_address(): Bytes | null {
    let value = this.get("mint_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set mint_address(value: Bytes | null) {
    if (!value) {
      this.unset("mint_address");
    } else {
      this.set("mint_address", Value.fromBytes(<Bytes>value));
    }
  }

  get mint_term(): BigInt | null {
    let value = this.get("mint_term");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mint_term(value: BigInt | null) {
    if (!value) {
      this.unset("mint_term");
    } else {
      this.set("mint_term", Value.fromBigInt(<BigInt>value));
    }
  }

  get mint_rank(): BigInt | null {
    let value = this.get("mint_rank");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mint_rank(value: BigInt | null) {
    if (!value) {
      this.unset("mint_rank");
    } else {
      this.set("mint_rank", Value.fromBigInt(<BigInt>value));
    }
  }
}
