import scrapy
from scrapy.loader.processors import MapCompose, TakeFirst
from w3lib.html import remove_tags

def no_quotation(value):
    return float(value.replace(",", ""))
    
def convert_percent(value):
    return round(float(value.replace("%", ""))/100,2)

def convert_time(value):
    value = value.strip()[:-10]
    days, hours, mins = value.split(" ")
    days = int(days.replace("D", "")) * 1440
    hours = int(hours.replace("H", "")) * 60
    total_hour = (days + hours)/60
    return(int(total_hour))

class Bf5CrawlItem(scrapy.Item):
    Account = scrapy.Field(
        input_processor = MapCompose(remove_tags),
        output_processor = TakeFirst()
    )
    Hours_Played = scrapy.Field(
        input_processor = MapCompose(remove_tags, convert_time),
        output_processor = TakeFirst()
    )
    Score_Per_Min = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Kill_Death_Ratio = scrapy.Field(
        input_processor = MapCompose(remove_tags),
        output_processor = TakeFirst()
    )
    Kills = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Kills_Per_Minute = scrapy.Field(
        input_processor = MapCompose(remove_tags),
        output_processor = TakeFirst()
    )
    Win_Ratio = scrapy.Field(
        input_processor = MapCompose(remove_tags, convert_percent), 
        output_processor = TakeFirst()
    )
    Matches_Won = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Deaths = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Assists = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Total_Damage_Done = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Heals = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Revives = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    Resupplies = scrapy.Field(
        input_processor = MapCompose(remove_tags, no_quotation),
        output_processor = TakeFirst()
    )
    
