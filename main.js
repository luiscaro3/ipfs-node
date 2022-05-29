import * as IPFS from "ipfs-core"

const ipfs = await IPFS.create()
const { cid } = await ipfs.add("Hello Luis test")
console.info(cid)
