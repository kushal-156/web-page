import requests
from itertools import cycle
from bs4 import BeautifulSoup

# Proxy list - replace with your own list of proxies
proxies = [
    'http://proxy1.com',
    'http://proxy2.com',
    'http://proxy3.com',
    # Add more proxies as needed
]
proxy_pool = cycle(proxies)

# URL to scrape - replace with the target URL
url = 'https://example.com'

# Set headers
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

# Function to make a request with proxy handling
def make_request(url, proxy):
    try:
        response = requests.get(url, proxies={"http": proxy, "https": proxy}, headers=headers)
        if response.status_code == 200:
            return response
        else:
            print(f"Request failed with status code {response.status_code}.")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Request failed with error: {e}")
        return None

# Perform the scraping with IP blocking handling
for i in range(5):  # Number of requests to make
    current_proxy = next(proxy_pool)
    response = make_request(url, current_proxy)
    if response:
        soup = BeautifulSoup(response.text, 'html.parser')
        # Scrape data from the webpage as needed
        print(soup.title.text)
    else:
        print(f"Switching proxy after failed attempt {i+1}...")
