class Swiftgraphql < Formula
  desc "Code generator for SwiftGraphQL library"
  homepage "https://swift-graphql.org"
  license "MIT"
  
  url "https://github.com/maticzav/swift-graphql/archive/5.0.11.tar.gz"
  sha256 "d5558cd419c8d46bdc958064cb97f963d1ea793866414c025906ec15033512ed"
  
  head "https://github.com/maticzav/swift-graphql.git"

  depends_on :xcode
  uses_from_macos "libxml2"
  uses_from_macos "swift"

  def install
    system "make", "install", "PREFIX=#{prefix}"
  end

  def test
    system "true"
  end
end
