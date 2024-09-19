'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'events',
      [
        {
          title: 'Tech Conference 2024',
          description: 'A conference on the latest in technology.',
          event_date: new Date('2024-10-15T09:00:00Z').toISOString(),
          organizer: 'TechCorp',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Art Exhibition',
          description: 'An exhibition showcasing local artists.',
          event_date: new Date('2024-11-01T18:00:00Z').toISOString(),
          organizer: 'ArtGallery',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Music Festival',
          description: 'A weekend of live music performances.',
          event_date: new Date('2024-12-20T14:00:00Z').toISOString(),
          organizer: 'MusicFest Inc.',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Pitch Night',
          description: 'Startup companies pitch their ideas.',
          event_date: new Date('2024-11-15T19:00:00Z').toISOString(),
          organizer: 'StartupHub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Charity Gala',
          description: 'A gala to raise funds for charity.',
          event_date: new Date('2024-12-05T20:00:00Z').toISOString(),
          organizer: 'CharityOrg',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Health & Wellness Retreat',
          description: 'A retreat focused on health and wellness.',
          event_date: new Date('2024-10-25T08:00:00Z').toISOString(),
          organizer: 'WellnessCo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Food Festival',
          description: 'A festival featuring various cuisines.',
          event_date: new Date('2024-11-10T11:00:00Z').toISOString(),
          organizer: 'Foodies Unite',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Sports Tournament',
          description: 'A tournament for various sports.',
          event_date: new Date('2024-12-12T15:00:00Z').toISOString(),
          organizer: 'SportsClub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Book Fair',
          description: 'A fair with book signings and readings.',
          event_date: new Date('2024-11-20T10:00:00Z').toISOString(),
          organizer: 'Booksellers Inc.',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Film Festival',
          description: 'A festival showcasing independent films.',
          event_date: new Date('2024-10-30T17:00:00Z').toISOString(),
          organizer: 'FilmFest Ltd.',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Science Expo',
          description: 'An exhibition of scientific innovations.',
          event_date: new Date('2024-12-01T13:00:00Z').toISOString(),
          organizer: 'ScienceOrg',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Dance Workshop',
          description: 'A workshop for learning various dance styles.',
          event_date: new Date('2024-11-05T16:00:00Z').toISOString(),
          organizer: 'DanceStudio',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Photography Contest',
          description: 'A contest for photography enthusiasts.',
          event_date: new Date('2024-11-25T12:00:00Z').toISOString(),
          organizer: 'PhotoClub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Tech Startup Expo',
          description: 'An expo for tech startups to showcase their products.',
          event_date: new Date('2024-10-10T09:00:00Z').toISOString(),
          organizer: 'TechExpo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Gaming Tournament',
          description: 'A tournament for competitive gamers.',
          event_date: new Date('2024-12-15T14:00:00Z').toISOString(),
          organizer: 'GamerHub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Travel Fair',
          description: 'A fair featuring travel agencies and destinations.',
          event_date: new Date('2024-11-30T11:00:00Z').toISOString(),
          organizer: 'TravelGroup',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Entrepreneurship Workshop',
          description: 'A workshop for aspiring entrepreneurs.',
          event_date: new Date('2024-10-20T13:00:00Z').toISOString(),
          organizer: 'EntrepreneurClub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'DIY Craft Fair',
          description: 'A fair showcasing handmade crafts and DIY projects.',
          event_date: new Date('2024-12-10T12:00:00Z').toISOString(),
          organizer: 'CraftyMakers',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Networking Event',
          description: 'An event for networking with startup founders.',
          event_date: new Date('2024-11-25T18:00:00Z').toISOString(),
          organizer: 'StartupNet',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Innovation Summit',
          description: 'A summit on innovative technologies and ideas.',
          event_date: new Date('2024-12-18T09:00:00Z').toISOString(),
          organizer: 'InnovateNow',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Cultural Festival',
          description: 'A festival celebrating diverse cultures.',
          event_date: new Date('2024-11-10T10:00:00Z').toISOString(),
          organizer: 'CulturalOrg',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Pet Adoption Fair',
          description: 'A fair focused on pet adoption and welfare.',
          event_date: new Date('2024-10-30T10:00:00Z').toISOString(),
          organizer: 'PetLovers',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Public Speaking Workshop',
          description: 'A workshop to improve public speaking skills.',
          event_date: new Date('2024-11-15T17:00:00Z').toISOString(),
          organizer: 'SpeakWell',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Entrepreneurial Summit',
          description: 'A summit for entrepreneurs and startups.',
          event_date: new Date('2024-12-07T09:00:00Z').toISOString(),
          organizer: 'EntrepreneurialSociety',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Virtual Reality Expo',
          description:
            'An expo showcasing the latest in virtual reality technology.',
          event_date: new Date('2024-10-12T10:00:00Z').toISOString(),
          organizer: 'VRTech',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Food Truck Rally',
          description: 'A rally featuring a variety of food trucks.',
          event_date: new Date('2024-11-08T11:00:00Z').toISOString(),
          organizer: 'FoodTruckFans',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Tech Talk',
          description: 'A series of talks on emerging tech trends.',
          event_date: new Date('2024-11-22T14:00:00Z').toISOString(),
          organizer: 'TechTalks',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Comic Con',
          description:
            'A convention for comic book and pop culture enthusiasts.',
          event_date: new Date('2024-12-14T10:00:00Z').toISOString(),
          organizer: 'ComicConOrg',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Sustainable Living Expo',
          description: 'An expo focused on sustainable living practices.',
          event_date: new Date('2024-11-12T09:00:00Z').toISOString(),
          organizer: 'SustainableFuture',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Outdoor Adventure Fair',
          description: 'A fair dedicated to outdoor and adventure gear.',
          event_date: new Date('2024-10-27T11:00:00Z').toISOString(),
          organizer: 'AdventureOut',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Bootcamp',
          description: 'A bootcamp for early-stage startups.',
          event_date: new Date('2024-11-30T13:00:00Z').toISOString(),
          organizer: 'StartupBootcamp',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Art & Craft Workshop',
          description: 'A workshop for various art and craft techniques.',
          event_date: new Date('2024-12-09T15:00:00Z').toISOString(),
          organizer: 'ArtCraftStudio',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Yoga Retreat',
          description: 'A retreat focusing on yoga and meditation.',
          event_date: new Date('2024-10-05T07:00:00Z').toISOString(),
          organizer: 'YogaLife',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Coding Bootcamp',
          description: 'A bootcamp for learning programming.',
          event_date: new Date('2024-11-01T09:00:00Z').toISOString(),
          organizer: 'CodeAcademy',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Charity Run',
          description: 'A charity run to raise funds for a good cause.',
          event_date: new Date('2024-12-22T08:00:00Z').toISOString(),
          organizer: 'RunForCharity',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'AI Symposium',
          description:
            'A symposium on artificial intelligence and machine learning.',
          event_date: new Date('2024-10-18T10:00:00Z').toISOString(),
          organizer: 'AIAcademy',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Career Fair',
          description: 'A fair for job seekers and employers.',
          event_date: new Date('2024-11-20T10:00:00Z').toISOString(),
          organizer: 'CareerConnect',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Vintage Market',
          description: 'A market featuring vintage and antique items.',
          event_date: new Date('2024-12-05T09:00:00Z').toISOString(),
          organizer: 'VintageLovers',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Digital Marketing Workshop',
          description: 'A workshop on digital marketing strategies.',
          event_date: new Date('2024-11-08T13:00:00Z').toISOString(),
          organizer: 'MarketingPros',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Fitness Expo',
          description: 'An expo featuring fitness products and services.',
          event_date: new Date('2024-10-22T11:00:00Z').toISOString(),
          organizer: 'FitnessFreaks',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Music Production Workshop',
          description: 'A workshop on music production techniques.',
          event_date: new Date('2024-11-12T16:00:00Z').toISOString(),
          organizer: 'MusicMakers',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Public Art Installations',
          description: 'An exhibition of public art installations.',
          event_date: new Date('2024-10-29T10:00:00Z').toISOString(),
          organizer: 'ArtInPublic',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Tech Innovations Conference',
          description: 'A conference on the latest tech innovations.',
          event_date: new Date('2024-12-10T09:00:00Z').toISOString(),
          organizer: 'TechInnovate',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Gaming Expo',
          description: 'An expo showcasing the latest in gaming.',
          event_date: new Date('2024-11-22T12:00:00Z').toISOString(),
          organizer: 'GamingExpo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Holiday Market',
          description: 'A market featuring holiday-themed goods.',
          event_date: new Date('2024-12-15T11:00:00Z').toISOString(),
          organizer: 'HolidayMarketOrg',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Showcase',
          description: 'A showcase of innovative startups.',
          event_date: new Date('2024-10-28T09:00:00Z').toISOString(),
          organizer: 'StartupShowcase',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Food & Drink Festival',
          description: 'A festival featuring food and drink vendors.',
          event_date: new Date('2024-11-14T12:00:00Z').toISOString(),
          organizer: 'FoodDrinkFest',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'DIY Workshop',
          description: 'A workshop for DIY enthusiasts.',
          event_date: new Date('2024-10-08T10:00:00Z').toISOString(),
          organizer: 'DIYCreators',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Young Entrepreneurs Summit',
          description: 'A summit for young entrepreneurs.',
          event_date: new Date('2024-11-04T09:00:00Z').toISOString(),
          organizer: 'YoungEntrepreneurs',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Eco-Friendly Expo',
          description:
            'An expo focused on eco-friendly products and practices.',
          event_date: new Date('2024-12-08T11:00:00Z').toISOString(),
          organizer: 'EcoExpo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Music Production Summit',
          description: 'A summit on the future of music production.',
          event_date: new Date('2024-11-21T13:00:00Z').toISOString(),
          organizer: 'MusicSummit',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Health & Fitness Workshop',
          description: 'A workshop on health and fitness.',
          event_date: new Date('2024-10-17T14:00:00Z').toISOString(),
          organizer: 'HealthFitnessWorkshop',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Tech Trends Summit',
          description: 'A summit on the latest tech trends.',
          event_date: new Date('2024-12-03T10:00:00Z').toISOString(),
          organizer: 'TechTrends',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Pitch Competition',
          description: 'A competition for startup pitches.',
          event_date: new Date('2024-11-18T10:00:00Z').toISOString(),
          organizer: 'PitchComp',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Film Making Workshop',
          description: 'A workshop on film making techniques.',
          event_date: new Date('2024-12-01T11:00:00Z').toISOString(),
          organizer: 'FilmMakers',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'International Food Festival',
          description: 'A festival celebrating international cuisines.',
          event_date: new Date('2024-10-11T12:00:00Z').toISOString(),
          organizer: 'InternationalFoods',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Mentorship Program',
          description: 'A program for startup mentorship and guidance.',
          event_date: new Date('2024-11-28T09:00:00Z').toISOString(),
          organizer: 'MentorshipHub',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Digital Art Expo',
          description: 'An expo showcasing digital art.',
          event_date: new Date('2024-10-23T13:00:00Z').toISOString(),
          organizer: 'DigitalArtExpo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Tech Startup Networking',
          description: 'A networking event for tech startups.',
          event_date: new Date('2024-12-09T14:00:00Z').toISOString(),
          organizer: 'TechNet',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'AI and Robotics Summit',
          description: 'A summit on AI and robotics advancements.',
          event_date: new Date('2024-11-12T11:00:00Z').toISOString(),
          organizer: 'AIRoboticsSummit',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Music & Arts Festival',
          description: 'A festival combining music and arts.',
          event_date: new Date('2024-10-13T10:00:00Z').toISOString(),
          organizer: 'MusicArtsFest',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Health Innovation Expo',
          description: 'An expo focused on health innovations.',
          event_date: new Date('2024-12-07T12:00:00Z').toISOString(),
          organizer: 'HealthInnovate',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Startup Success Stories',
          description: 'An event showcasing startup success stories.',
          event_date: new Date('2024-11-10T15:00:00Z').toISOString(),
          organizer: 'StartupStories',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Innovative Design Conference',
          description: 'A conference on innovative design.',
          event_date: new Date('2024-10-12T09:00:00Z').toISOString(),
          organizer: 'DesignInnovate',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Future of Work Summit',
          description: 'A summit discussing the future of work.',
          event_date: new Date('2024-12-20T14:00:00Z').toISOString(),
          organizer: 'FutureWork',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Craft Beer Festival',
          description: 'A festival featuring craft beers from various brewers.',
          event_date: new Date('2024-10-29T13:00:00Z').toISOString(),
          organizer: 'CraftBeerFest',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Travel & Adventure Expo',
          description: 'An expo showcasing travel and adventure experiences.',
          event_date: new Date('2024-12-14T09:00:00Z').toISOString(),
          organizer: 'TravelAdventure',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Youth Leadership Conference',
          description: 'A conference for developing youth leadership skills.',
          event_date: new Date('2024-11-08T10:00:00Z').toISOString(),
          organizer: 'YouthLead',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: 'Innovation in Education Summit',
          description: 'A summit on innovations in education.',
          event_date: new Date('2024-11-02T11:00:00Z').toISOString(),
          organizer: 'EduInnovate',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  },
};
