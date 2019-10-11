import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import CardPost from '../Card/CardPost'

const CardList = () => {

    const currentPosts = useSelector(state => state.posts)

    return (
        <section className="cardList">
            <Card day='FRI'>
            {
                currentPosts
                .filter(post => post.day === 'FRI')
                .map(post => <CardPost key={post.id} post={post} />)
            }
            </Card>
            <Card day='SAT'>
            {
                currentPosts
                .filter(post => post.day === 'SAT')
                .map(post => <CardPost key={post.id} post={post} />)
            }
            </Card>
            <Card day='SUN' />
        </section>
    )
}

export default CardList