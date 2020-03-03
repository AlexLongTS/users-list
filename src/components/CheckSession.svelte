<!-- VERSION: 1.0.0  -->
<div></div>

<script>
import {post} from 'httpie'
import {goto} from '@sapper/app'
import {onMount} from 'svelte'

import {base} from '../state'

export let fallback = '/'

onMount(async () => {
  const session = window.localStorage.getItem('session')
  const uuid = window.localStorage.getItem('uuid')
  const beta = window.localStorage.getItem('beta')

  try {
    if(!session || !uuid) throw new Error('UUID or Session Missing')
    if(!beta) throw new Error('Not Beta User')
    const res = await post(`${base}/user/check-session`, {body:{session, uuid}})
  } catch (error) {
    try {
      post(`${base}/user/check-session`, {body:{session, uuid, forceDelete:true}})
    } catch (error) {}
    window.localStorage.removeItem('session')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('uuid')
    window.localStorage.removeItem('beta')
    goto(fallback)
  }
})
</script>