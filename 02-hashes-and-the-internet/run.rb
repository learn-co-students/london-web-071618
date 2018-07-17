require 'rest-client'
require 'pry'
require 'json'

def fetch_books
  url = 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'
  resp = RestClient.get(url)
  hash = JSON.parse(resp)
  hash['items']
end

def print_books(books)
  books.each do |book|
    print_book(book)
  end
end

def print_book(book)
  print_header
  print_title(book)
  print_authors(book)
  print_date(book)
end

def print_header
  puts '***************************'
end

def print_authors(book)
  authors = book['volumeInfo']['authors']
  if !!authors
    puts authors.join(' & ')
  else
    puts 'No authors listed'
  end
end

def print_title(book)
  title = book['volumeInfo']['title']
  if !!title
    puts title
  else
    puts 'No title listed'
  end
end

def print_date(book)
  date = book['volumeInfo']['publishedDate']
  if !!date
    puts date
  else
    puts 'No published date listed'
  end
end

def execute
  books = fetch_books
  print_books(books)
end

execute
