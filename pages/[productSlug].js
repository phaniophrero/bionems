import React from 'react'
import { useRouter } from 'next/router'
import fs from 'fs/promises'
import path from 'path'
import ProductDetails from '../components/product details page/product-details'

const ProductDetailsPage = (props) => {
    const { product, allProducts } = props

    return (
        <div className='product-details-page'>
            <ProductDetails product = { product } allProducts = { allProducts } />
        </div>
    )
}

export default ProductDetailsPage

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'products-categorys-data.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data
}

export async function getStaticProps(context){
    const { params } = context
    const productSlug = params.productSlug
    const data = await getData()
    
    const filteredData = data.products.find(data => data.slug === productSlug)

    if(!filteredData) {
        return { notFound: true }
    }

    return {
        props: {
            product: filteredData,
            allProducts: data.products
        }
    }
}

export async function getStaticPaths() {
    const data = await getData()
    const pathsWithParams = data.products.map(product => ({ params: { productSlug: product.slug } }))


    return {
        paths: pathsWithParams,
        fallback: false
    }
}
