import { Link, useNavigate } from "react-router-dom"
import { PATHS } from "../../App"
import Button from "../UI/Button/Button"

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <nav style={{display:'flex',gap: 10}}>
        {/* <Link to={PATHS.comments}>Comments</Link>
        <Link to={PATHS.counter}>Counter</Link>
        <Link to={PATHS.counter2}>Counter2</Link>
        <Link to={PATHS.post}>post</Link> */}
        <Button onClick={()=>navigate(-1)}>
           back
        </Button>
        <Button onClick={()=>navigate(+1)}>
           forward
        </Button>
        <Button onClick={()=>navigate(PATHS.comments)}>
           Comments
        </Button>
        <Button onClick={()=>navigate(PATHS.counter)}>
        Counter
        </Button>
        <Button onClick={()=>navigate(PATHS.counter2)}>
        Counter2
        </Button>

        <Button onClick={()=>navigate(PATHS.post)}>
        post
        </Button>
      </nav>
    </header>
  )
}

export default Header