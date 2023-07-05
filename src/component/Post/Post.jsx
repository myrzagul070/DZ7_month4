import { postUrl } from "../../api/api"
import useFetch from "../../hooks/useFetch"

const Post = () => {
  const {data, loading }= useFetch(postUrl)

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {data.map(item=><div key={item.id}>
          {item.title}
      </div>
      )}
    </div>
  )
}

export default Post