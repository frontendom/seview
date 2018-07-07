import { isArray, isString, nodeDef } from "./util"

const transformNodeDef = (transform, def) => {
  if (isArray(def.children)) {
    const result = []
    def.children.forEach(child => {
      result.push(isString(child) ? transform(child) : transformNodeDef(transform, child))
    })
    def.children = result
  }
  return transform(def)
}

export const sv = transform => node => {
  const def = nodeDef(node)
  return transformNodeDef(transform, def)
}
