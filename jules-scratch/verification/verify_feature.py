from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    time.sleep(15)
    page.goto("http://localhost:5173")
    page.get_by_role("button", name="Search by Meaning").click()
    page.get_by_label('Enter a word or concept (e.g., "love", "sky")').fill("love")
    page.get_by_role("button", name="Search").click()
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
