import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		return NextResponse.json({ message: 'The server is running!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

// handle unsupported methods
const methodNotAllowed = NextResponse.json({ message: 'This HTTP method is not supported by this route.' }, { status: 405 });

export async function HEAD(request: Request) {
	return methodNotAllowed;
}

export async function POST(request: Request) {
	return methodNotAllowed;
}

export async function PUT(request: Request) {
	return methodNotAllowed;
}

export async function DELETE(request: Request) {
	return methodNotAllowed;
}

export async function PATCH(request: Request) {
	return methodNotAllowed;
}

export async function OPTIONS(request: Request) {
	return methodNotAllowed;
}
