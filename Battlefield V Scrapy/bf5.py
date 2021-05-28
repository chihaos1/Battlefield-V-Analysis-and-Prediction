import scrapy
from bf5_crawler.items import Bf5CrawlItem
from scrapy.loader import ItemLoader

class BattlefieldVSpider(scrapy.Spider):
    name = 'bfv'
    
    start_urls = [
        'https://battlefieldtracker.com/bfv/leaderboards/stats/all/ScorePerMinute'
    ]
    
    def parse(self, response):
        for profiles in response.xpath("//a[contains(@href, 'profile')]/@href").getall():
            profile_url = f'https://battlefieldtracker.com{profiles}/overview'
            new_url = scrapy.Request(url=profile_url, callback=self.parse_profile)
            yield new_url
        
        for i in range(150, 243):
            next_page = f'https://battlefieldtracker.com/bfv/leaderboards/stats/all/ScorePerMinute?page={i}'
            yield scrapy.Request(url=next_page, callback=self.parse)
        
    def parse_profile(self, response):
        for profile in response.xpath("//div[contains(@class, 'segment')]"):
            loader = ItemLoader(item=Bf5CrawlItem(), selector=profile)
            loader.add_xpath("Account","//span[@class='trn-ign__username']")
            loader.add_xpath("Hours_Played","//div[contains(@class, 'segment')]/div[1]/div/div/span")
            loader.add_xpath("Score_Per_Min","//div[3]/div[1]/div/div[2]/span[2]")
            loader.add_xpath("Kill_Death_Ratio","//div[3]/div[2]/div/div[2]/span[2]")
            loader.add_xpath("Kills","//div[3]/div[3]/div/div[2]/span[2]")
            loader.add_xpath("Kills_Per_Minute","//div[3]/div[4]/div/div[2]/span[2]")
            loader.add_xpath("Win_Ratio","//div[3]/div[5]/div/div[2]/span[2]")
            loader.add_xpath("Matches_Won","//div[3]/div[6]/div/div[2]/span[2]")
            loader.add_xpath("Deaths","//div[3]/div[7]/div/div[2]/span[2]")
            loader.add_xpath("Assists","//div[3]/div[8]/div/div[2]/span[2]")
            loader.add_xpath("Total_Damage_Done","//div[3]/div[9]/div/div[2]/span[2]")
            loader.add_xpath("Heals","//div[3]/div[10]/div/div[2]/span[2]")
            loader.add_xpath("Revives","//div[3]/div[11]/div/div[2]/span[2]")
            loader.add_xpath("Resupplies","//div[3]/div[12]/div/div[2]/span[2]")
        
            yield loader.load_item()

   