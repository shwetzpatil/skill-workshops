require 'docking_station'

# class MockWorkingBike
#   def working?
#     true
#   end
# end
#
# class MockBrokenBike
#   def working?
#     false
#   end
# end

describe DockingStation do
  describe '#working_bike_count' do

    let (:working_bike) {double ('mock_working_bike')}
    let (:broken_bike) {double ('mock_broken_bike')}
    before(:each) {
      allow(working_bike).to receive(:working?).and_return(true)
      allow(broken_bike).to receive(:working?).and_return(false)
    }


    context '1 working bike' do

      it "returns 1" do



        bikes = []
        bikes << working_bike
        docking_station = DockingStation.new(bikes)

        expect(docking_station.working_bike_count).to eq(1)
      end
    end

    context '1 working bike, 1 broken bike' do
      it "returns 1" do

        bikes = []
        bikes << working_bike
        bikes << broken_bike
        docking_station = DockingStation.new(bikes)

        expect(docking_station.working_bike_count).to eq(1)
      end
    end
  end

  describe '#random_bike_working?' do

    let (:working_bike) {double ('mock_working_bike')}
    let (:broken_bike) {double ('mock_broken_bike')}
     before(:each) {
      allow(working_bike).to receive(:working?).and_return(true)
      allow(broken_bike).to receive(:working?).and_return(false)
    }

    context 'random bike is working' do
      it 'returns true' do
        bikes = [working_bike, broken_bike]
        docking_station = DockingStation.new(bikes)
        allow(bikes).to receive(:sample).and_return(bikes[0])
        expect(docking_station.random_bike_working?).to eq(true)
      end
    end

    context 'random bike is broken' do
      it 'returns false' do
        bikes = [working_bike, broken_bike]
        docking_station = DockingStation.new(bikes)
        allow(bikes).to receive(:sample).and_return(bikes[1])
        expect(docking_station.random_bike_working?).to eq(false)
      end
    end
  end
end
