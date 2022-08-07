import type {CreateItemAttrs} from '$services/types';

export const serialize = (attrs: CreateItemAttrs) => {
    console.log(attrs)
    return {
        ...attrs,
        createdAt: attrs.createdAt?.toMillis(),
        endingAt: attrs.endingAt?.toMillis()
    }
};
