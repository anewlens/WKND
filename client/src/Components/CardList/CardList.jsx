import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import CardPost from '../Card/CardPost'

const CardList = () => {

    const currentPosts = useSelector(state => state.posts)
    const currentComments = useSelector(state => state.comments)

    useEffect(() => {
        console.log('hey hey hey hey', currentComments)
    })

    return (
        <section className="cardList">
            <Card day='FRI'>
                {
                    currentPosts
                    .filter(post => post.day === 'FRI')
                    .map(post => 
                        <CardPost 
                        key={post.id} 
                        post={post}
                        comments={currentComments.filter(comment => comment.post_id === post.id)} />)
                }
            </Card>
            <Card day='SAT'>
                {
                    currentPosts
                    .filter(post => post.day === 'SAT')
                    .map(post => 
                        <CardPost 
                            key={post.id} 
                            post={post} 
                            comments={currentComments.filter(comment => comment.post_id === post.id)}/>)
                }
            </Card>
            <Card day='SUN'>
            {
                    currentPosts
                    .filter(post => post.day === 'SUN')
                    .map(post => 
                        <CardPost 
                            key={post.id} 
                            post={post} 
                            comments={currentComments.filter(comment => comment.post_id === post.id)}/>)
                }
            </Card>
        </section>
    )
}

export default CardList