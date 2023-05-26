import { NextResponse } from 'next/server';

import { Blog } from '../../../db/models/index';

const placeholderText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam perferendis fugit debitis, odit eaque ipsam sed quam magni eligendi aspernatur quos cumque fugiat consectetur, velit similique consequuntur aut enim.';
const placeholderImage = 'http://placekitten.com/200/300';

export async function GET(request: Request) {
	try {
		return NextResponse.json({ message: 'The blog routes are not ready!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

export async function POST(request: Request) {
	try {
		const newBlog = await Blog.create({
			title: 'The First Blog',
			caption: 'What a fantastic blog this is.',
			text: placeholderText,
			image: placeholderImage
		});
		return NextResponse.json({ newBlog }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

export async function PUT(request: Request) {
	try {
		return NextResponse.json({ message: 'The blog routes are not ready!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

export async function DELETE(request: Request) {
	try {
		return NextResponse.json({ message: 'The blog routes are not ready!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

// handle unsupported methods
const methodNotAllowed = NextResponse.json({ message: 'This HTTP method is not supported by this route.' }, { status: 405 });

export async function HEAD(request: Request) {
	return methodNotAllowed;
}

export async function PATCH(request: Request) {
	return methodNotAllowed;
}

export async function OPTIONS(request: Request) {
	return methodNotAllowed;
}
